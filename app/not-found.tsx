import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the page you are looking for</p>
      <p>
        View <Link href="/">the main page</Link>
      </p>
    </div>
  )
}