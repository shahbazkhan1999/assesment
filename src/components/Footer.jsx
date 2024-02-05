export default function Footer() {
  return (
    <div className="formFooter">
      <p>
        Data in the import file is correct. Please press continue to import.
      </p>
      <div className="footerBtns">
        <button className="btnContinue">Continue Import</button>
        <button className="btnCancel">Cancel</button>
      </div>
    </div>
  );
}
