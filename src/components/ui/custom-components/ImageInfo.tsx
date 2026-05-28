import { imageInfoText } from "@/lib/data"
import { motion } from "framer-motion"

export const ImageInfo = () => {
  return (
    <div className="w-full h-full flex flex-col justify-end p-2">
      {imageInfoText.map(({ icon: Icon, label, value }) => (
        <motion.div
          key={label}
          className="flex items-center p-2 rounded-xl"
          transition={{ duration: 0.2 }}
        >
          <div className="p-2 rounded-lg">
            <Icon size={18} style={{ color: "var(--text)" }} />
          </div>
          <div>
            {/* <p className="text-xs uppercase tracking-widest mb-0.5">{label}</p> */}
            <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
              {value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
