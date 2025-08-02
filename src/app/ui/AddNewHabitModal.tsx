import Modal from "./Modal";

export default function AddNewHabitModal({onClick} : {onClick : () => void}) {
  return (
    <Modal title="Add New Habit" onClick={onClick}>
      <form action="" method="post" className="space-y-4 mt-4">
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="habitName">Habit name</label>
          <input type="text" name="habitName" id="habitName" placeholder="e.g., Morning Meditation" className="self-stretch rounded-md shadow-xs"/>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="habitDescription">Description</label>
          <input type="text" name="habitDescription" id="habitDescription" placeholder="e.g,. 10 minutes of mindfulness" className="self-stretch rounded-md shadow-xs" />
        </div>
      </form>
    </Modal>
  )
}