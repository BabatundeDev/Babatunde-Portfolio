import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ishaubabatunde49@gmail.com",
      href: "mailto:ishaubabatunde49@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/BabatundeDev" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/babatunde-ishau-95ab94359" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/BabatundeIshau" }
  ];

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-white/40 font-mono text-sm">05</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-5xl md:text-6xl font-mono tracking-tight">CONTACT</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-mono mb-4">Let's Work Together</h3>
              <p className="text-white/60 leading-relaxed">
                I'm always open to new opportunities, collaborations, and projects that push the boundaries of modern web experiences. Whether you need a React specialist, a frontend engineer to strengthen your product delivery pipeline, or a developer to bring your digital idea to life, I bring a solutions focused mindset and a commitment to high performance execution. <br /> <br />

                If you want to discuss a project, request a quote, or explore how I can support your team or business, feel free to reach out. I respond quickly and maintain a streamlined communication process to keep engagements efficient and productive.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 border border-white/20 mt-1">
                    <method.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/40 text-sm mb-1">{method.label}</div>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-white">{method.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="text-white/40 text-sm">Follow Me</div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 hover:border-white hover:bg-white/5 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono">Available for Work</span>
              </div>
              <p className="text-white/60 text-sm">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>

          <div className="border border-white/10 p-8">
            <form
              className="contact-form space-y-6"
              action="https://formsubmit.co/ishaubabatunde49@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label htmlFor="name" className="block text-sm text-white/60 mb-2 font-mono">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="First Last"
                  required
                  className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white rounded-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-2 font-mono">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tunde@example.com"
                  required
                  className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white rounded-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-white/60 mb-2 font-mono">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white rounded-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2 font-mono">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="bg-transparent border-white/20 text-white placeholder:text-white/30 focus:border-white rounded-none resize-none min-h-[180px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 rounded-none group cursor-pointer"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>

          </div>
        </div>

        <div className="mt-24 text-center border-t border-white/10 pt-12">
          <p className="text-3xl md:text-4xl font-mono mb-6">
            Ready to start a project?
          </p>
          <a
            href="mailto:ishaubabatunde49@gmail.com"
            className="inline-flex items-center gap-2 text-xl text-white/60 hover:text-white transition-colors group"
          >
            <span>ishaubabatunde49@gmail.com</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}