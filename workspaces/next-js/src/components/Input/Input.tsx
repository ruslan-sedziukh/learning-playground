type Props = React.ComponentProps<'input'>

const Input = ({ type, name, placeholder, onChange, ...res }: Props) => {
  return (
    <input
      className="border p-1 rounded border-neutral-300 outline-blue-300"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...res}
    />
  )
}

export default Input
