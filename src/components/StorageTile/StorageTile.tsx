import { Wrapper } from '../UI/Wrapper/Wrapper'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "@/styles/progressbar.scss"
import cl from './StorageTile.module.scss'
import { useFilesStore } from '@/store/files.store';
import { formatting } from '@/utils';

export const StorageTile = () => {
  // FIXME: fix hardcoded values 
  const storage = useFilesStore((state) => state.storage)

  const total = formatting.formatBytes(storage.total)
  const used = formatting.formatBytes(storage.used)
  const free = formatting.formatBytes(storage.free)


  const percentage = (Math.round((Number.parseInt(used) / Number.parseInt(total)) * 100) / 1000).toFixed(2)

  const size = 190
  const styles = buildStyles({
    rotation: 0.25,
    strokeLinecap: 'round',
    pathColor: "#017EFA",
    trailColor: "#62636630",
  })

  return (
    <Wrapper>
      <div className={cl.container}>
        <div style={{ width: size, height: size, margin: "0 auto" }}>
          <CircularProgressbarWithChildren strokeWidth={10} value={percentage} styles={styles}>
            <div className={cl.inside}>
              {percentage}%
              { /*  */}
              <span>Total: {Number.parseInt(total)} GB</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className={cl.info}>
          <div className={cl.used}>Used: {used}</div>
          <div className={cl.left}>Left: {free}</div>
        </div>

      </div>
    </Wrapper>
  )
}
