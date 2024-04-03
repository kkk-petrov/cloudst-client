import { Wrapper } from '../UI/Wrapper/Wrapper'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "@/styles/progressbar.scss"
import cl from './StorageTile.module.scss'
import { useFilesStore } from '@/store/files.store';
import { formatBytes } from '@/utils/formatting';
import { Tile } from '../UI/Tile/Tile';

export const StorageTile = () => {
  const storage = useFilesStore((state) => state.storage)

  let total, used, free, percentage
  if (storage) {
    total = formatBytes(storage.total, 0)
    used = formatBytes(storage.used)
    free = formatBytes(storage.free, 0)

    percentage = Number.parseFloat((Math.round((Number.parseInt(used) / Number.parseInt(total)) * 100) / 1000).toFixed(2))
  }



  const size = 190
  const styles = buildStyles({
    rotation: 0.25,
    strokeLinecap: 'round',
    pathColor: "#017EFA",
    trailColor: "#62636630",
  })

  return (
    <Tile>
      <div className={cl.container}>
        <div style={{ width: size, height: size, margin: "0 auto" }}>
          <CircularProgressbarWithChildren strokeWidth={10} value={percentage || 0} styles={styles}>
            <div className={cl.inside}>
              {percentage}%
              { /*  */}
              <span>Total: {total}</span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className={cl.info}>
          <div className={cl.used}>Used: {used}</div>
          <div className={cl.left}>Left: {free}</div>
        </div>

      </div>
    </Tile>
  )
}
