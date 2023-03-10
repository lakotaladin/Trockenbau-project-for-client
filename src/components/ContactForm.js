import React, { useRef, useState } from 'react';
import { Form, Input, message } from 'antd';
import emailjs from 'emailjs-com';
import '../resources/contactform.css';
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";

const ContactForm = () => {
    const form = useRef(null);
    const [username, setUsername] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')



    const sendEmail = () => {

       
        const f = document.getElementById("mail-form")

        // Email config
        emailjs.sendForm('service_6gqem82', 'template_61f4t9j', f, 'y2iRWZrA7KaaXGQyb')
            .then(() => {
                message.success('Podaci su poslati, sačekajte odgovor administratora');
                console.log(emailjs);
            }, (error) => {
                message.error({ success: false, message: error.message });
                console.log(error)
            });
    }


    return (
        <Form id="mail-form" ref={form} onFinish={sendEmail} layout="vertical">
            <Form.Item
                label="Vorname"
                name="firstNamee"
                rules={[
                    { required: true, message: 'Bitte geben Sie Ihren Vornamen ein' },
                ]}
            >
                <Input prefix={<UserOutlined />} value={username} onChange={e => setUsername(e.target.value)} type="text" name="from_name" placeholder='Vorname' required />
            </Form.Item>
            <Form.Item
                label="Nachname"
                name="lastNamee"
                rules={[{ required: true, message: 'Bitte geben Sie Ihren Nachnamen ein' }]}
            >
                <Input prefix={<UserOutlined />} value={lastname} onChange={e => setLastName(e.target.value)} type="text" name="from_lastname" placeholder='Nachname' />
            </Form.Item>
            <Form.Item
                label="E-Mail"
                name="emaill"
                rules={[
                    { required: true, message: 'Bitte geben Sie Ihre E-Mail-Adresse ein' },
                    { type: 'email', message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' },
                ]}
            >
                <Input prefix={<MailOutlined />} value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder='example@gmail.com' />
            </Form.Item>
            <Form.Item
                label="Nachricht"
                name="messagee"
                rules={[{ required: true, message: 'Bitte geben Sie eine Nachricht ein' }]}
            >
                <Input.TextArea
                    prefix={<MessageOutlined />}
                    value={msg}
                    name="message"
                    onChange={e => setMsg(e.target.value)}
                    placeholder='Fragen? Wünsche? Anregungen?'
                    autoSize={{ minRows: 5 }}
                    maxLength={2000}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    className='contact-button w-100 p-2'
                    type="submit"
                    value="Senden"
                    disabled={username === "" || lastname === "" || email === "" || msg === ""}
                />
            </Form.Item>

        </Form>
        // </div>
    );
};

export default ContactForm;
