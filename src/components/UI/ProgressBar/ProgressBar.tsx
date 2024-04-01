import cl from './ProgressBar.module.scss'

interface Props {
  percentage: number
}

export const ProgressBar = ({ percentage }: Props) => {

  return (
    <div className={cl.container}>
      <span className={cl.background} />
      <span className={cl.bar} style={{ width: `${percentage}%` }} />
    </div>
  )
}
