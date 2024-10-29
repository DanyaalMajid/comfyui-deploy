export const customInputNodes: Record<string, string> = {
  ComfyUIDeployExternalBoolean: "boolean",
  ComfyUIDeployExternalCheckpoint: "string - (public checkpoints download url)",
  ComfyUIDeployExternalFaceModel: "string - (public face model download url)",
  ComfyUIDeployExternalImageAlpha: "string - (public image url)",
  ComfyUIDeployExternalImageBatch:
    "JSON string array - (public image url (http/s) / public zip url / base64)",
  ComfyUIDeployExternalImage: "string - (public image url)",
  ComfyUIDeployExternalLora: "string - (public lora download url)",
  ComfyUIDeployExternalNumberInt: "integer",
  ComfyUIDeployExternalNumber: "float",
  ComfyUIDeployExternalTextAny: "string",
  ComfyUIDeployExternalText: "string",
  ComfyUIDeployExternalVideo: "string - (public video url)",
};
