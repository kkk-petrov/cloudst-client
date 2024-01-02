import { Wrapper } from '../UI/wrapper/wrapper'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "@/styles/progressbar.scss"
import cl from './storageProgress.module.scss'

export const StorageProgress = () => {
  const total = 500
  const used = 275
  const percentage = Math.round((used / total) * 100)

  const size = 190
  const styles = buildStyles({
    rotation: 0.25,
    strokeLinecap: 'round',
    pathColor: "#017EFA",
  })

  return (
    <Wrapper style={{ width: "70%" }}>
      <div className={cl.container}>
        <div style={{ width: size, height: size, margin: "0 auto" }}>
          <CircularProgressbarWithChildren strokeWidth={10} value={percentage} styles={styles}>
            <div className={cl.inside}>
              {percentage}%
              <span>Total: {total}GB</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className={cl.info}>
          <div className={cl.used}>Used: 275GB</div>
          <div className={cl.left}>Left: 225GB</div>
        </div>

      </div>
    </Wrapper>
  )
}
