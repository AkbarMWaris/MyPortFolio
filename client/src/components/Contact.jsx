import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success('Message sent successfully 🎉');
      reset();
    } catch (error) {
      toast.error('Failed to send. Try again!');
      console.error('EmailJS error:', error);
    }
  };

  const inputStyle = {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
  };

  return (
    <section id="contact" className="py-24 sm:py-32 max-w-3xl mx-auto px-4">
      <div className="flex items-baseline gap-3 mb-12">
        <span className="gutter-line">05</span>
        <p className="code-comment">contact.jsx</p>
      </div>

      <div className="panel overflow-hidden">
        <div
          className="flex items-center gap-2 px-4 py-3 border-b"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff7b8e' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#e8c074' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#5ce6a6' }} />
          <span className="font-code text-xs ml-3" style={{ color: 'var(--text-dim)' }}>
            send-message.sh
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-10 space-y-5 font-code">
          <div>
            <label className="text-sm block mb-2" style={{ color: 'var(--accent-blue)' }}>$ name</label>
            <input
              {...register('name', { required: true })}
              placeholder="your name"
              className="w-full p-3.5 rounded-lg focus:outline-none text-sm"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="text-sm block mb-2" style={{ color: 'var(--accent-blue)' }}>$ email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="you@example.com"
              className="w-full p-3.5 rounded-lg focus:outline-none text-sm"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="text-sm block mb-2" style={{ color: 'var(--accent-blue)' }}>$ message</label>
            <textarea
              {...register('message', { required: true })}
              placeholder="type your message..."
              rows={5}
              className="w-full p-3.5 rounded-lg focus:outline-none text-sm"
              style={inputStyle}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn-terminal w-full justify-center"
          >
            <Send size={18} />
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
