const formatDate = (date: string): string => {
  const parsedDate = Date.parse(date);

  return Intl.DateTimeFormat('pt-BR').format(parsedDate);
};

export default formatDate;
