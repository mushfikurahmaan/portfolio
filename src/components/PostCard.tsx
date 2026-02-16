import Link from "next/link";

type PostCardProps = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  href?: string;
};

export function PostCard({
  title,
  description,
  date,
  readTime,
  href,
}: PostCardProps) {
  const content = (
    <>
      <h3 className="post-card-title">{title}</h3>
      <p className="post-card-description">{description}</p>
      <p className="post-card-meta">
        {date} • {readTime}
      </p>
    </>
  );

  const cardStyle = {
    padding: "1.25rem 1.5rem",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    backgroundColor: "var(--page-bg)",
  };

  if (href) {
    return (
      <Link
        href={href}
        className="post-card-link"
        style={{ ...cardStyle, textDecoration: "none", color: "inherit" }}
      >
        {content}
      </Link>
    );
  }

  return <div className="post-card" style={cardStyle}>{content}</div>;
}
