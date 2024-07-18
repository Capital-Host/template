document.getElementById('pdfForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    console.log("Formulário submetido");

    const { PDFDocument, rgb } = PDFLib;

    // Carregar o template PDF
    let existingPdfBytes;
    try {
        existingPdfBytes = await fetch('template.pdf').then(res => res.arrayBuffer());
        console.log("Template PDF carregado com sucesso");
    } catch (error) {
        console.error("Erro ao carregar o template PDF:", error);
        return;
    }

    // Criar um novo PDF a partir do template
    let pdfDoc;
    try {
        pdfDoc = await PDFDocument.load(existingPdfBytes);
        console.log("PDFDocument carregado com sucesso");
    } catch (error) {
        console.error("Erro ao carregar o PDFDocument:", error);
        return;
    }

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Capturar os valores do formulário
    const empresa = document.getElementById('empresa').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const userWP = document.getElementById('usuarioWP').value;
    const passWP = document.getElementById('senhaWP').value;
    const domain = document.getElementById('domain').value;
    const domainLink = `http://${domain}`;
    // const date = document.getElementById('date').value;

    const date = document.getElementById('date').value;
    const [year, month, day] = date.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    const email = document.getElementById('email').value;
    const senhaEmail = document.getElementById('senhaEmail').value;
    const email2 = document.getElementById('email2').value;
    const senhaEmail2 = document.getElementById('senhaEmail2').value;
    const email3 = document.getElementById('email3').value;
    const senhaEmail3 = document.getElementById('senhaEmail3').value;
    const email4 = document.getElementById('email4').value;
    const senhaEmail4 = document.getElementById('senhaEmail4').value;
    const email5 = document.getElementById('email5').value;
    const senhaEmail5 = document.getElementById('senhaEmail5').value;
    const servidorEntrada = document.getElementById('servidorEntrada').value;
    const servidorSaida = document.getElementById('servidorSaida').value;
    const cpanel = document.getElementById('cpanel').value;   
    const cpanelLink = `https://${cpanel}/cpanel`;
    const provedor = document.getElementById('provedor').value;    

    // Adicionar os valores capturados ao PDF
    try {
        firstPage.drawText(cpanelLink, {
            x: 50,
            y: 620,
            size: 14,
            color: rgb(1, 0, 0),
        });
        firstPage.drawText(usuario, {
            x: 415,
            y: 640,
            size: 12,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(senha, {
            x: 415,
            y: 620,
            size: 12,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(userWP, {
            x: 100,
            y: 525,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(passWP, {
            x: 100,
            y: 510,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(domainLink, {
            x: 225,
            y: 455,
            size: 14,
            color: rgb(1, 0, 0),
        });
        firstPage.drawText(provedor, {
            x: 430,
            y: 416,
            size: 12,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(formattedDate, {
            x: 180,
            y: 416,
            size: 12,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(email, {
            x: 50,
            y: 140,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(senhaEmail, {
            x: 310,
            y: 140,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(email2, {
            x: 50,
            y: 110,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(senhaEmail2, {
            x: 310,
            y: 110,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(email3, {
            x: 50,
            y: 85,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(senhaEmail3, {
            x: 310,
            y: 85,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(email4, {
            x: 50,
            y: 55,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(senhaEmail4, {
            x: 310,
            y: 55,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(email5, {
            x: 50,
            y: 30,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(senhaEmail5, {
            x: 310,
            y: 30,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(servidorEntrada, {
            x: 280,
            y: 315,
            size: 13,
            color: rgb(0, 0, 0),
        });
        firstPage.drawText(servidorSaida, {
            x: 280,
            y: 265,
            size: 13,
            color: rgb(0, 0, 0),
        });

        console.log("Texto adicionado ao PDF com sucesso");

        // Criar o PDF atualizado
        const pdfBytes = await pdfDoc.save();

        // Baixar o PDF atualizado
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${empresa}.pdf`;
        link.click();

        console.log("PDF gerado e download iniciado");
    } catch (error) {
        console.error("Erro ao adicionar texto ao PDF:", error);
    }
});
