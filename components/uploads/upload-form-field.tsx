"use client";
import React, { useActionState, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import Upload from "./upload-imagekit";
import { uploadVideo } from "@/actions/upload";


const UploadVideoFormFields = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const [formState, action, isPending] = useActionState(uploadVideo, {
    errors: {},
  });
  const onSubmitHandler = (formData: FormData) => {
    // add videoUrl in formData
    formData.append("videoUrl", videoUrl);
    formData.append("thumbnailUrl", thumbnailUrl);
    return action(formData);
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Movie</h1>

      <form action={onSubmitHandler} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="movieName" className="block">
            Movie Name
          </Label>
          <Input
            id="movieName"
            name="movieName"
            type="text"
            placeholder="Enter movie name"
          />
          {formState.errors.movieName && (
            <p className="text-red-500 text-sm">{formState.errors.movieName}</p>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="block">
            Description
          </Label>
          <Input
            id="description"
            name="description"
            type="text"
            placeholder="Enter movie description"
          />
          {formState.errors.description && (
            <p className="text-red-500 text-sm">
              {formState.errors.description}
            </p>
          )}
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category" className="block mb-2">
            Category
          </Label>
          <Select name="category">
            <SelectTrigger id="category">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trailer">Trailer</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
            </SelectContent>
          </Select>
          {formState.errors.category && (
            <p className="text-red-500 text-sm">{formState.errors.category}</p>
          )}
        </div>
        <div className="space-y-6">
          <Label>Thumbnail File</Label>
          <Upload setThumbnailUrl={setThumbnailUrl} />
        </div>
        <div className="space-y-6">
          <Label>Movie File</Label>
          <Upload setVideoUrl={setVideoUrl} />
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default UploadVideoFormFields;
