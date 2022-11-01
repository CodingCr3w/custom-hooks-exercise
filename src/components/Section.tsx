import clsx from "clsx"

type Props = {
  title: string
  dark?: boolean
}

export default function Section({ title, dark = false }: Props) {
  return (
    <div
      className={clsx(
        "h-[90vh] flex items-center justify-center",
        dark ? "bg-slate-800" : "bg-slate-200"
      )}
    >
      <h2
        className={clsx(
          "text-3xl font-bold",
          dark ? "text-slate-200" : "text-slate-800"
        )}
      >
        {title}
      </h2>
    </div>
  )
}
