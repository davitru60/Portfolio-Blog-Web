
import { useState } from "react";
import { Modal } from "../../ui/Modal/Modal";
import { PolicyContentModal } from "../../ui/Modal/PolicyModal";
import { LegalContentModal } from "../../ui/Modal/LegalModal";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
 
  return (
    <>
      <footer className="bg-white py-6 text-center text-black dark:bg-black dark:text-gray-300">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Desarrollado por David Trujillo
          Carrero
        </p>
        <div className="mt-2 flex justify-center space-x-4 text-sm underline">
          <button onClick={() => setShowLegal(true)}>Aviso legal</button>
          <button onClick={() => setShowPrivacy(true)}>
            Política de privacidad
          </button>
        </div>
      </footer>

      {showLegal && (
        <Modal
          onClose={() => setShowLegal(false)}
          title="Aviso legal"
          content={<LegalContentModal></LegalContentModal>}
        />
      )}

      {showPrivacy && (
        <Modal
          onClose={() => setShowPrivacy(false)}
          title="Política de privacidad"
          content={<PolicyContentModal></PolicyContentModal>}
        />
      )}
    </>
  );
};

export { Footer };
