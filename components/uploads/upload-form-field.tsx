import React from "react";
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

type Props = {};

const UploadFormFields = (props: Props) => {
    const isPending = false;
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Movie</h1>

      <form action="" className="space-y-6">
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
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category" className="block">
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
          </div>
          <div className="space-y-6">
            <Label>Thumbnail File</Label>
            {/* <Upload/> */}
          </div>

          <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>
            {
                isPending ? "Submitting..." : "Submit"
            }
          </Button>
      </form>
    </div>
  );
};

export default UploadFormFields;
