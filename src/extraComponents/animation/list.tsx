export const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        when: "beforeChildren", // Ensure the children animate after the container becomes visible
      },
    },
  };
  
  export const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };