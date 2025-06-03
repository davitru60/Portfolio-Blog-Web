interface ModalProps {
  onClose: () => void;
  title: string;
  content?: React.ReactNode;
}

const Modal = (modalProps: ModalProps) => {
  const { onClose, title, content } = modalProps
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl w-full max-w-5xl max-h-[90vh] flex flex-col p-8">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-2xl font-bold hover:text-red-600 transition-colors"
          aria-label="Cerrar modal"
          type="button"
        >
          &times;
        </button>

        {/* Título */}
        <h2 id="modal-title" className="text-2xl font-semibold mb-4 pr-10">
          {title}
        </h2>

        {/* Contenido con scroll solo en esta área */}
        <div
          className="overflow-y-auto pr-2"
          style={{ maxHeight: "calc(90vh - 100px)", WebkitOverflowScrolling: "touch" }}
        >
          <div className="text-base space-y-4">{content}</div>
        </div>
      </div>
    </div>
  );
};
export {Modal}