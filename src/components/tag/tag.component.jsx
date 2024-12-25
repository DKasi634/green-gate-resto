

const Tag = ({active, content}) => {
  return (
    <div className={`${active && active} tag_span`}>{content}</div>
  )
}

export default Tag