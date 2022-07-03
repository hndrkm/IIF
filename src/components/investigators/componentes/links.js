export default function Links({links}) {
  const products=links
  const list = []

  for (const [i, link] of products.entries()) {
    list.push(<div className="text-blue-600 hover:text-blue-900  visited:text-purple-600"><a href="#" target="_blank">{link}</a></div>)
  }

  return (
    <div>
      {list}
    </div>
  )
}

