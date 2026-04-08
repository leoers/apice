import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    // O Node.js vai buscar automaticamente os dados do seu .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, 
      port: Number(process.env.SMTP_PORT),
      secure: true, // MUDOU PARA TRUE (Obrigatório para porta 465)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // No Gmail com porta 465 e secure: true, o bloco TLS abaixo 
      // geralmente não é necessário, mas mantê-lo não quebra o código.
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "comercial@apiceportaria.com.br", 
      replyTo: email,
      subject: `Novo Orçamento: ${nome}`,
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>Novo pedido de orçamento</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Mensagem:</strong><br />${mensagem}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Enviado com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro no envio:", error);
    return NextResponse.json({ message: "Erro ao enviar e-mail." }, { status: 500 });
  }
}