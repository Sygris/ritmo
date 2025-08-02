import Modal from "./Modal";

export default function AddNewHabitModal({onClick} : {onClick : () => void}) {
  return (
    <Modal title="Add New Habit" onClick={onClick}>
      <form action="" method="post" className="space-y-4">
        <div>
          <label htmlFor="habitName">Habit name</label>
          <input type="text" name="habitName" id="habitName" />
        </div>
      </form>
    </Modal>
  )
}