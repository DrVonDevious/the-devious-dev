const WorkContainer = () => {
  const workList = [
    {
      content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    },
    {
      content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    },
    {
      content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    },
    {
      content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    },
    {
      content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    },
    {
      content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    },
  ]

  const works = workList.map((work) => {
    return (
      <div style={{marginTop: "400px"}}>{work.content}</div>
    )
  })

  return (
    <div>
      {works}
    </div>
  )
}

export default WorkContainer
