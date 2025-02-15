import styles from './style.module.css'

export function OptionTable({ options }: { options: [string, string, any, string] }) {
  return (
    <div
      className={
        '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' + styles.container
      }
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b py-4 text-left dark:border-neutral-700">
            <th className="py-2 font-semibold">Key</th>
            <th className="py-2 pl-6 font-semibold">Type</th>
            <th className="px-6 py-2 font-semibold">Description</th>
            <th className="px-6 py-2 font-semibold">Example</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {options.map(([key, type, description, example]) => (
            <tr key={key} className="border-b border-gray-100 dark:border-neutral-700/50">
              <td className="whitespace-pre py-2 font-sans text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500">
                {key}
              </td>
              <td className="whitespace-pre py-2 pl-6 font-sans text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {type}
              </td>
              <td className="py-2 pl-6">{description}</td>
              <td className="py-2 pl-6 font-sans text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {example}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
