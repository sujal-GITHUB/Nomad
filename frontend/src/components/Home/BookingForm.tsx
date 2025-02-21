import {motion} from 'framer-motion'

export default function BookingForm() {
  return (
    <motion.div
      className="bg-white dark:bg-white/90 shadow-lg p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.01 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Location', 'Date', 'People'].map((label, index) => (
          <motion.div key={label} className="space-y-2">
            <label className="text-[#333333] dark:text-gray-700 font-medium">{label}</label>
            <input
              type={label === 'Date' ? 'date' : label === 'People' ? 'number' : 'text'}
              placeholder={
                label === 'Location' ? 'Where are you going?' :
                label === 'Date' ? 'When will you travel?' :
                'How many people?'
              }
              className="w-full p-3 border border-[#CCCCCC] rounded-lg 
                       bg-white text-[#333333] placeholder-[#888888]
                       focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent 
                       transition-all duration-300 hover:shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
