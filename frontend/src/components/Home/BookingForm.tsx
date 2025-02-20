import {motion} from 'framer-motion'
import { useScroll, useTransform } from "framer-motion";

export default function BookingForm() {
  return (
    <motion.div
      className="bg-white/90 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.01 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Location', 'Date', 'People'].map((label, index) => (
          <motion.div
            key={label}
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <label className="text-gray-700 font-medium">{label}</label>
            <input
              type={label === 'Date' ? 'date' : label === 'People' ? 'number' : 'text'}
              placeholder={
                label === 'Location' ? 'Where are you going?' :
                label === 'Date' ? 'When will you travel?' :
                'How many people?'
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
