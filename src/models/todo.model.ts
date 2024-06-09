import { InferSchemaType, Schema, model } from 'mongoose';

const todoSchema: Schema = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export type Todo = InferSchemaType<typeof todoSchema>;

export default model<Todo>('Todo', todoSchema);
