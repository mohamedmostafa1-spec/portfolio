import os

def create_simple_pdf(filename):
    # A valid, standard PDF 1.4 containing Mohamed Mostafa Farag's CV
    stream_content = """BT
/F1 20 Tf
50 780 Td
(Mohamed Mostafa Farag) Tj
ET
BT
/F2 12 Tf
50 760 Td
(Junior Frontend Developer (React) | Egypt | mohamed2016mostafa@gmail.com) Tj
ET
BT
/F1 14 Tf
50 720 Td
(SUMMARY) Tj
ET
BT
/F2 10 Tf
50 700 Td
(Computer Science graduate (Arab Open University, 2025) focused on building responsive,) Tj
0 -14 Td
(user-friendly interfaces with React, JavaScript, HTML, and CSS. Quick learner with strong) Tj
0 -14 Td
(problem-solving skills, seeking an entry-level frontend role to contribute to a development team.) Tj
ET
BT
/F1 14 Tf
50 645 Td
(SKILLS) Tj
ET
BT
/F2 10 Tf
50 625 Td
(Frontend: React, JavaScript, HTML, CSS) Tj
0 -14 Td
(Backend & APIs: Python, Flask) Tj
0 -14 Td
(Machine Learning: TensorFlow, Deep Learning) Tj
0 -14 Td
(Other Languages: Java, C#) Tj
0 -14 Td
(Soft Skills: Problem-solving, team collaboration, fast learner, research) Tj
0 -14 Td
(Languages: Arabic (native), English (proficient)) Tj
ET
BT
/F1 14 Tf
50 515 Td
(FEATURED PROJECT) Tj
ET
BT
/F1 11 Tf
50 495 Td
(Retinal Disease Detection Web Application (Graduation Project)) Tj
ET
BT
/F2 10 Tf
50 475 Td
(- Full-stack web app detecting retinal diseases from eye images using TensorFlow & Flask backend.) Tj
0 -14 Td
(- Designed and built responsive UI with HTML, CSS, JavaScript for image uploads and result display.) Tj
0 -14 Td
(- Independently handled full lifecycle: data handling, model integration, backend, and UI design.) Tj
0 -14 Td
(Tech Stack: TensorFlow, Flask, Python, JavaScript, HTML, CSS) Tj
ET
BT
/F1 14 Tf
50 395 Td
(EDUCATION) Tj
ET
BT
/F2 10 Tf
50 375 Td
(Bachelor of Computer Science, Arab Open University, Egypt (Graduated 2025)) Tj
ET
"""
    stream_bytes = stream_content.encode('latin1')
    stream_len = len(stream_bytes)

    objects = []
    # 1: Catalog
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    # 2: Pages
    objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # 3: Page
    objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>")
    # 4: Contents
    objects.append(b"<< /Length " + str(stream_len).encode('ascii') + b" >>\nstream\n" + stream_bytes + b"\nendstream")
    # 5: Font F1 (Helvetica-Bold)
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    # 6: Font F2 (Helvetica)
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    pdf = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    xref = [0]
    for obj in objects:
        xref.append(len(pdf))
        pdf.extend(f"{len(xref)-1} 0 obj\n".encode('ascii'))
        pdf.extend(obj)
        pdf.extend(b"\nendobj\n")

    xref_pos = len(pdf)
    pdf.extend(f"xref\n0 {len(xref)}\n0000000000 65535 f \n".encode('ascii'))
    for offset in xref[1:]:
        pdf.extend(f"{offset:010d} 00000 n \n".encode('ascii'))
    pdf.extend(f"trailer\n<< /Size {len(xref)} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode('ascii'))

    with open(filename, "wb") as f:
        f.write(pdf)
    print("PDF generated successfully:", filename)

if __name__ == "__main__":
    out_dir = os.path.join(os.path.dirname(__file__), "public")
    os.makedirs(out_dir, exist_ok=True)
    create_simple_pdf(os.path.join(out_dir, "cv.pdf"))
