function ContactForm() {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="message">Message</label>
            <input type="text" id="message" />
        </form>
    )
}

export default ContactForm