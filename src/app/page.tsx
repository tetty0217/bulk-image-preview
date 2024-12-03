"use client";

import { Box, Button, Grid, Stack, Typography } from "@/components/ui";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedImages, setSelectedImages] = useState<
    { index: number; file: File; image: string | undefined }[]
  >([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageContentTypes = [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/bmp",
        "image/webp",
        "image/svg+xml",
        "image/x-icon",
      ];

      const imageUrls = Array.from(event.target.files).map((file, index) => {
        if (imageContentTypes.includes(file.type)) {
          return { index, file, image: URL.createObjectURL(file) };
        }
        return {
          index,
          file,
          image: undefined,
        };
      });
      setSelectedImages(imageUrls);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Form submitted with images: ${selectedImages.join(", ")}`);
  };

  return (
    <Stack sx={{ gap: 2, flexDirection: "column" }}>
      <Stack
        sx={{
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          fontSize="large"
          align="center"
          sx={{ color: "white" }}
        >
          Preview Form
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="fileInput"
          />
          <Button fullWidth variant="contained">
            <label htmlFor="fileInput">画像を追加する</label>
          </Button>
        </form>
      </Stack>
      <Box sx={{ overflow: "hidden" }}>
        <Typography variant="h2" fontSize="large" align="center">
          Selected Images
        </Typography>

        {selectedImages.length > 0 && (
          <Box sx={{ overflowY: "auto", maxHeight: "600px" }}>
            <Grid container spacing={2} columns={3}>
              {selectedImages.map(({ index, file, image }) => {
                if (image) {
                  return (
                    <Grid key={index} size={1}>
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          paddingBottom: "100%",
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Selected ${index}`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
