const miscFunctions = {
    intGenerator(max) {
      return Math.floor(Math.pow(10, max - 1) + Math.random() * (Math.pow(10, max) - Math.pow(10, length - 1) - 1));
    },
  };
  
  export default miscFunctions;
  