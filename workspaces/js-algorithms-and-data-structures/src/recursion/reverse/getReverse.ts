const getReverse = (str: string): string => {
  if (str.length === 0) {
    return ''
  }

  return str[str.length - 1] + getReverse(str.slice(0, str.length - 1))
}

export default getReverse
