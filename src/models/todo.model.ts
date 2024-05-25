import { InferSchemaType, Schema, model } from 'mongoose';

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export type Todo = InferSchemaType<typeof todoSchema>;

export default model<Todo>('Todo', todoSchema);
