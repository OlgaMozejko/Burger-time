const combineClasses = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

export default combineClasses;