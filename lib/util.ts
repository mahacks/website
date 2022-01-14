const censorWord = (str: string) => {
  return str[0] + '*'.repeat(str.length - 2) + str.slice(-1)
}

export const censorEmail = (email: string) => {
  let arr = email.split('@')
  return censorWord(arr[0]) + '@' + censorWord(arr[1])
}
