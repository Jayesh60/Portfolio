import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { sectionWrapper } from "../sectionWrapper/sectionWrapper";
import { slideIn } from "../utils/motion";
// import SeaCanvas from "./canvas/SeaCanvas";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("portfolio_jayesh", "template_zaeutl2", {
      from_name : form.name,
      to_name: "Jayesh",
      from_email: form.email,
      to_email: "jwadhe46@gmail.com",
      message: form.message
    }, 
    "nnEYEDwOjnxsxdiUK")
    .then(()=>{
      setLoading(false);
      alert("Thank you We will get back to you!")
      setForm({
        name:"",
        email:"",
        message:""
      })
    },(error)=>{
      setLoading(false);
      console.log(error);
      alert("Something went wrong")

    });
  };

  return (
    <div className="xl:mt-12  flex  justify-center items-center gap-10  overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" w-full xl:w-[70%] bg-tertiary xs:rounded-xl p-6 xs:p-8 rounded-md"
      >
        <p className={styles.heroSubText}>Get in Touch</p>
        {/* <h3 className={styles.heroHeadText}>Contact</h3> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 w-full"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-[#28244f] py-4 w-full px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-[#28244f] py-4 w-full px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="3"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-[#28244f] py-4 w-full px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-[#28244f] py-3 px-16 xl:w-[30%] flex text-center justify-center items-center lg:w-[50%] md:w-full font-bold shadow-md shadow-primary rounded-xl outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default sectionWrapper(Contact, "contact");
