import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  validationMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      <label className={block text-xl text-orange-500 mb-2}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <motion.input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={w-full p-3 border-2 border-white rounded-lg focus:outline-none transition duration-300 ease-in-out ${
          isFocused ? 'border-orange-500' : 'border-gray-300'
        } hover:border-orange-500}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-invalid={!!validationMessage}
        aria-describedby={${name}-error}
      />
      {validationMessage && (
        <p id={${name}-error} className="text-red-500 text-sm mt-1">
          {validationMessage}
        </p>
      )}
    </div>
  );
};

export default Input;