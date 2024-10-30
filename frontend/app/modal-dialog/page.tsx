import ModalDialog from "../_components/modal-dialog";

export default function ModalDialogPage() {
  return (
    <ModalDialog
      body="Your upgrade plan process will be cancelled. You need to start again if you leave the process."
      btnLayout="double"
      confirmBtnText="Yes"
      denyBtnText="No"
      title="Are you sure you want to leave the process?"
      variant="danger"
    />
  );
}
