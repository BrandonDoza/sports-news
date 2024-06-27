import './Header.css'

export default function Header() {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString(options);
  return (
    <div className="header">
      <h1 className='title'>Sports News</h1>
      <h2>{formattedDate}</h2>
    </div>
  );
}
