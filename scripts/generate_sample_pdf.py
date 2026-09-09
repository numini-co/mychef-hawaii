import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

out_dir = '/Users/openclaw/Downloads/mychef-hawaii-website/app/public/sample-quotes'
os.makedirs(out_dir, exist_ok=True)
pdf_path = os.path.join(out_dir, 'sample-itemized-quote-mychef-hawaii.pdf')

doc = SimpleDocTemplate(pdf_path, pagesize=letter, rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40)
story = []
styles = getSampleStyleSheet()

title_style = ParagraphStyle('TitleStyle', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=22, leading=26, textColor=colors.HexColor('#1A1815'))
subtitle_style = ParagraphStyle('SubStyle', parent=styles['Normal'], fontName='Helvetica', fontSize=10, leading=14, textColor=colors.HexColor('#706A5E'))
body_style = ParagraphStyle('Body', parent=styles['Normal'], fontName='Helvetica', fontSize=10, leading=14, textColor=colors.HexColor('#33302A'))
bold_style = ParagraphStyle('Bold', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=colors.HexColor('#1A1815'))
h2_style = ParagraphStyle('H2', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=colors.HexColor('#1A1815'))

# Helvetica lacks Hawaiian ʻokina — use ASCII "Hawaii" so PDF text extractors never show "HAWAI I" / "Hawaini".
story.append(Paragraph('myCHEF HAWAII', title_style))
story.append(Paragraph('Statewide Culinary Coordination Hub & Island Flagships · Hawaii GET License: GE-214-892-7488-01', subtitle_style))
story.append(Spacer(1, 15))
story.append(HRFlowable(width='100%', thickness=1, color=colors.HexColor('#D6D0C4'), spaceBefore=5, spaceAfter=15))

# Header metadata
data_meta = [
    [Paragraph('<b>Quote Reference:</b> HI-SAMPLE-2026', body_style), Paragraph('<b>Event Date:</b> Thursday Evening Sunset', body_style)],
    [Paragraph('<b>Location:</b> Private Oceanfront Villa, Wailea, Maui', body_style), Paragraph('<b>Party Size:</b> 10 Guests (Adults)', body_style)],
    [Paragraph('<b>Format:</b> 4-Course Bespoke In-Villa Plated Dinner', body_style), Paragraph('<b>Lead Chef:</b> Resident Island Culinary Lead', body_style)],
]
meta_table = Table(data_meta, colWidths=[260, 260])
meta_table.setStyle(TableStyle([
    ('PADDING', (0,0), (-1,-1), 4),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
]))
story.append(meta_table)
story.append(Spacer(1, 15))

story.append(Paragraph('ITEMIZED CULINARY PROPOSAL', h2_style))
story.append(Spacer(1, 8))

# Line items table
items = [
    [Paragraph('<b>Item & Scope Description</b>', bold_style), Paragraph('<b>Rate / Base</b>', bold_style), Paragraph('<b>Amount</b>', bold_style)],
    [Paragraph('<b>Culinary Labor & Dedicated Lead Chef</b><br/><font size="8" color="#706A5E">Bespoke menu design, prep, in-villa execution, table service coordination, and spotless kitchen return.</font>', body_style), Paragraph('$150.00 / guest<br/>(10 guests)', body_style), Paragraph('$1,500.00', bold_style)],
    [Paragraph('<b>Service Charge (Itemized)</b><br/><font size="8" color="#706A5E">Dedicated kitchen assistant, logistical pack-in, sanitation, service support.</font>', body_style), Paragraph('20.0%', body_style), Paragraph('$300.00', bold_style)],
    [Paragraph('<b>Hawaii General Excise Tax (GET)</b><br/><font size="8" color="#706A5E">State of Hawaii statutory tax (pursuant to HRS 237 & Act 247 Maui County surcharge).</font>', body_style), Paragraph('4.7120%', body_style), Paragraph('$84.82', bold_style)],
    [Paragraph('<b>Groceries & Ingredients (At Cost Guarantee)</b><br/><font size="8" color="#706A5E">Fresh daily catch from local purveyors, organic produce, farm ingredients passed through at zero retail markup. Original receipts presented at service.</font>', body_style), Paragraph('Receipt Cost<br/>(Zero Markup)', body_style), Paragraph('Estimated<br/>$450.00–$550.00', body_style)],
]
t = Table(items, colWidths=[310, 110, 100])
t.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#F5F3ED')),
    ('LINEBELOW', (0,0), (-1,0), 1, colors.HexColor('#1A1815')),
    ('LINEBELOW', (0,1), (-1,-1), 0.5, colors.HexColor('#E5E0D5')),
    ('PADDING', (0,0), (-1,-1), 8),
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
]))
story.append(t)
story.append(Spacer(1, 15))

# Totals summary
totals = [
    [Paragraph('<b>Total Labor, Service & Statutory Taxes:</b>', bold_style), Paragraph('<b>$1,884.82</b>', bold_style)],
    [Paragraph('<b>Grocery Passthrough:</b>', body_style), Paragraph('Billed at actual merchant receipts', body_style)],
    [Paragraph('<b>Total Client Investment:</b>', bold_style), Paragraph('<b>$1,884.82 + Groceries at Cost</b>', bold_style)],
]
tot_table = Table(totals, colWidths=[360, 160])
tot_table.setStyle(TableStyle([
    ('ALIGN', (1,0), (1,-1), 'RIGHT'),
    ('PADDING', (0,0), (-1,-1), 4),
    ('LINEABOVE', (0,0), (-1,0), 1, colors.HexColor('#1A1815')),
    ('LINEBELOW', (0,-1), (-1,-1), 1.5, colors.HexColor('#1A1815')),
]))
story.append(tot_table)
story.append(Spacer(1, 20))

story.append(Paragraph('OUR TRANSPARENCY PROMISE', h2_style))
story.append(Paragraph('1. <b>Zero Hidden Costs:</b> No secret corkage fees, fuel surcharges, or undisclosed travel zones within published coverage boundaries.<br/>2. <b>The Written Quote is the Confirmed Total:</b> You will never receive a post-event billing surprise.<br/>3. <b>Fully Insured & Permitted:</b> myCHEF Hawaii maintains $2,000,000 Commercial General Liability coverage with custom COIs provided on request.<br/>4. <b>Resident Chefs:</b> 100% resident culinary leads based permanently on the island of your booking.', body_style))

doc.build(story)
print('Generated PDF successfully at:', pdf_path)
