from pathlib import Path
from docx2pdf import convert

src = Path(r'C:\Users\joshu\Downloads\Joshua_Bancolita_ATS_CV3.docx')
dst = Path(r'C:\Users\joshu\Desktop\Portfolio\next-portfolio\public\Joshua_Resume.pdf')
print('Converting...', src, '->', dst)
convert(str(src), str(dst))
print('Done', dst.exists(), dst)
