/*import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";*/

const DragDropUpload = () => {
  /*const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/gif": [".gif"],
      "image/svg+xml": [".svg"],
    },
    onDrop: (acceptedFiles) => {
      const uploadedFile = acceptedFiles[0];

      if (uploadedFile) {
        const img = new Image();
        img.src = URL.createObjectURL(uploadedFile);
        img.onload = () => {
          if (img.width > 800 || img.height > 400) {
            setError("Image dimensions must not exceed 800x400px.");
            return;
          }

          setFile(uploadedFile);
          setPreview(URL.createObjectURL(uploadedFile));
          setError("");
        };
      }
    },
  });

  return (
    <div className="w-full border border-gray-300 rounded-lg p-4">
      <label className="block text-gray-700 font-medium mb-2">
        Upload Identification Document
      </label>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-6 text-center cursor-pointer ${
          isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive
            ? "Drop the file here..."
            : "Drag & drop an image, or click to select a file"}
        </p>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {preview && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm">Preview:</p>
          <Image
            src={preview}
            alt="Uploaded file"
            width={200}
            height={100}
            className="mt-2 rounded-md"
          />
        </div>
      )}
    </div>
  );*/
};

export default DragDropUpload;
