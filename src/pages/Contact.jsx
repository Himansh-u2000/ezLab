import { useState } from 'react';
import rangoliOtherHalf from '../assets/rangoliOtherHalf.png';
import CommonButton from '../component/CommonButton';
import Input from '../component/Input';
import TextArea from '../component/TextArea';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Name is required";

    if (!form.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter valid email";

    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();

      setSuccessMsg("Form Submitted");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Something went wrong! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-full md:relative'>
      <div className="absolute bottom-0 left-0 md:block hidden">
        <img src={rangoliOtherHalf} alt="" className='w-lg h-lg' />
      </div>

      <div className="fixed top-0 right-0 md:block hidden pointer-events-none">
        <img src={rangoliOtherHalf} alt="" className='w-lg h-lg rotate-180' />
      </div>

      <div className="flex md:flex-row flex-col items-center gap-2 pt-16 px-16 h-full relative z-10">
        <div className="w-1/2 md:block hidden">
          <p className='text-lg md:w-sm mx-auto text-center'>
            Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.<br/>Let’s catch up over coffee.<br/>Great stories always begin with a good conversation
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col md:justify-start justify-center items-start gap-4">
          <div className="md:w-4/5">
            <h1 className='text-xl text-center w-full'>Join the Story</h1>
            <p className='text-center w-full'>Ready to bring your vision to life? Let’s talk.</p>

            <form
              className="flex flex-col my-8 w-[400px] gap-4 mx-auto"
              onSubmit={handleSubmit}
            >
              <Input
                placeholder="Your name*"
                className="w-full"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                error={errors.name}
                required
              />

              <Input
                type="email"
                placeholder="Your email*"
                className="w-full"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                error={errors.email}
                required
              />

              <Input
                type="tel"
                placeholder="Phone"
                className="w-full"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <TextArea
                placeholder="Message*"
                className="w-full"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                error={errors.message}
                required
              />

              <CommonButton
                type="submit"
                className={`bg-[#F15D2B] text-white mt-4 justify-center w-fit mx-auto px-6 py-2`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </CommonButton>

              {successMsg && (
                <p className="text-green-600 text-center font-medium fade-in">
                  {successMsg}
                </p>
              )}
            </form>

            <p className='text-[#F15D2B] text-center'>
              <a href="mailto:vernita@varnanfilms.co.in">vernita@varnanfilms.co.in</a> | <a href="tel:+919873684567">+91 98736 84567</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
