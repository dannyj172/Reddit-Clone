import { model, Schema } from "mongoose";

export interface Topic {
  id: string;
  topicName: string;
  banner: string;
  postsAmount: number;
}

export const TopicSchema = new Schema<Topic>(
  {
    topicName: { type: String, required: true },
    banner: { type: String },
    postsAmount: { type: Number, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const TopicModel = model<Topic>("topic", TopicSchema);
