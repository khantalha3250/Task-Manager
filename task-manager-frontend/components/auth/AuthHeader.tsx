interface Props {
  title: string;
  subtitle: string;
}

export default function AuthHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
}
