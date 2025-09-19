import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2>Name: Krish Trivedi</h2>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/Krish-Trivedi/cprg306-assignments"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>My Repository</span>
        </Link>
      </p>
    </div>
  );
}
