function Contact() {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg"
        ></textarea>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;