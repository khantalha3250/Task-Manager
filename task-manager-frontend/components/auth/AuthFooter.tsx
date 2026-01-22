interface Props {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthFooter({ text, linkText, href }: Props) {
  return (
    <p className="mt-6 text-center text-sm text-gray-500">
      {text}{" "}
      <a href={href} className="text-indigo-600 font-medium hover:underline">
        {linkText}
      </a>
    </p>
  );
}
